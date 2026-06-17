# mahjong

The latest version is **Ver 1.0.0 (alpha 1.3)**. Please make sure that the bot is successfully running the latest version. 
Please report any bugs or problems you find. 

## Usage
Please first check the status using the `version` command. **To execute a command, you first need to mention the bot, followed by the command and arguments if necessary.** If the command requires one or more arguments, **each has to be separated by a single space** ` `.

The `version` command usually returns the running version of the bot. Please confirm that the bot is running the latest version indicated above.

### Before beginning the game
*A game must take place somewhere.* Yes, you have to assign a channel to the game. Obvious, isn’t it? The bot needs to know where you want to play the game. 
The `start` command does this. It first creates a new `Game` instance, and then associates it with the channel where the command was invoked. 
And don’t forget to **mention the bot**! That goes before the command, as always.
Here, you have to be careful. Sending the command alone will cause an error. Unlike the `version` command, the `start` command requires **one argument**, such as `3T`.*<sup>1</sup> (If two or more arguments are specified, only the first one will be used and the rest will be ignored.)
After the `start` command is properly executed, the bot will drop a message in the channel. If you hear crickets, the bot might be running an older version. 
If you got an error message like “*Error 11 blah blah blah…*”, it means you invoked the `start` command once again even though a game is active in the channel. Please finish the ongoing game before spinning up a new one!

**Footnote**
1. The first letter `3` is used for a 3-player game. For the usual 4-player game, this can be omitted. Either `T`, `H` or `1` is required: `T` for the east-round match, `H` for the half-game match (east and south rounds), and `1` for the full-game match.

### Let’s invite your friends 

Look around and find those who look like the people who are clearly slacking off and suffering from terminal boredom. All you have to do now is drag them into the game you have just started!
Tell them to mention the bot and execute the `join` command. The `join` command pushes the player into the game’s player array.
Here, again, if the `join` command is executed, the bot will drop a message in the channel. If the message was “*Error 12 : Failed to join*”, it means the player is already taking part in another game played somewhere else. Be careful not to disturb busy players!
<br>

**Footnote**

* Recommended number of players: **3 - 4**.

### Are you ready?
When everyone is ready, the bot automatically begins the game (East Round #1).
<br>