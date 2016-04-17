# RobotOtter
Discord chatbot for rolling dice &amp; flipping coins. Also some other features for /r/OtterDnD

# How to use
0. Install [Node.js](https://nodejs.org/en/download/)
1. Install [discord.js](http://discordjs.readthedocs.org/en/latest/installing.html).
2. Download RobotOtter (Obviously) and extract it.
3. Create a Discord account (If you haven't already).
4. Join the channels you want to use the bot on.
5. Fill out 'email' and 'password' in authExample.json.
6. Rename it to auth.json.
7. Run in command line `node RobotOtter.js` while in the installation folder. (Or just run RunRobotOtter.bat).

If that doesn't work it's probably my fault.

# Settings

## "subreddit"
`Default: false`

You probably don't need to change this unless you want to use !wiki for some reason.

# Commands

Arguments between **{Curly Braces}** are **required**, while those between [Brackets] are optional.

## !roll [times]d{dice}[operator][times OR modifier]d[dice]
Rolls a dice. Follows [dice notation](https://en.wikipedia.org/wiki/Dice_notation).

**{times}: Number of dice rolls (max. 10, default 1.)**

**{dice}: Number of sides per die (max. 256)**

[operator]: Math operator to use.

[times]: Number of dice rolls for second die. (max. 10).

[modifier]: Number to modify the roll by.

[dice]: Number of sides for second die. (max. 256).

*Example: !roll 2d20 =>*

    {8} + {14} 
    = 22

*!roll d20-d3 =>*

    {8} = (8) - [1]
    = 7

## !flip [times]
Flips a coin.

[times]: Number of coin flips (max. 10)

*Example: !flip 2 =>*

    {T} + {H} = [H = 1] : [T = 1]

## !wiki [page]
*Subreddit mode only*

Shows the wiki or a page on the wiki.

[page]: Page name to show:

    items, quests, players, locations

*Example: !wiki players =>*

   `https:/reddit.com/r/OtterDnD/wiki/players`


## !help [command]
Brings a help menu or help for a specific command.

[command]: The command to show help for.

*Example: !help flip =>*

    Formatting: !flip {times} 
    {times}: Number of coin flips (max. 10)
    Example: !flip 2 => {T} + {H} = [H = 1] : [T = 1]

## License
i dunno i have no idea what each license does so i'll just leave this with no license

So do whatever you want with this, copy it, print it, make art with it. Just give me credit because not doing so is immoral
