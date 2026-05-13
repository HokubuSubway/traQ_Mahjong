import { Api, Client } from 'traq-bot-ts';
const api = new Api({
    baseApiParams: { headers: { Authorization: `Bearer ${process.env.TOKEN}` } },
});
const client = new Client({ token: process.env.TOKEN });
const VERSION = 'Ver 1.0.0 alpha 1';
var cgcc : string[] = [];
var mcc : {user: string, id: string}[] = [];
class Tile {}
class Game {
    async dm_rcv(id : string, content: string){}
    async dm_emj(id : string, msg : string, emj : string){}
}
var cgc : {id: string, game: Game}[] = [];
client.on('MESSAGE_CREATED', async ({ body }) => {
    const {
        user: {id, name},
        plainText,
        channelId
    } = body.message;
    if(cgcc.length > 0){
        for(var i = 0; i < cgcc.length; i++){
            var c:string = cgcc[i] ?? "";
            var index = cgc.findIndex(entry => entry.id === c);
            if (index !== -1){
                cgc.splice(index, 1);
            }
        }
        cgcc = [];
    }
    if (plainText == "@BOT_Mahjong2 version"){
        await api.channels.postMessage(channelId, {content: VERSION, embed: true});
    }else if(plainText == "@BOT_Mahjong2 start"){
        await api.channels.postMessage(channelId, {content: 'ERROR', embed: true});
    }
})
client.on('DIRECT_MESSAGE_CREATED', async ({ body }) => {
    const {
        user: { id },
        plainText, 
        channelId
    } = body.message;
    var index = cgc.findIndex(entry => entry.id === channelId);
    if(index != -1){
        await cgc[index]?.game.dm_rcv(id, plainText);
    }
});
client.on('BOT_MESSAGE_STAMPS_UPDATED', async ({ body }) => {
    const {
        messageId,
        stamps
    } = body;
    const stamp = stamps[0];
    const stampId = stamp?.stampId ?? "";
    const userId = stamp?.userId ?? "";
    var index = mcc.findIndex(entry => entry.user === (stamp?.userId ?? ""));
    if(index != -1){
        var tmp = mcc[index]?.id;
        var jndex = cgc.findIndex(entry => entry.id === tmp);
        if(jndex != -1){
            await cgc[jndex]?.game.dm_emj(userId, messageId, stampId);
        }
    }
});
client.listen(() => {
    console.log('BOT が起動しました。');
});