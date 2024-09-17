import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }
  handle(): void {
    this.bot.start((ctx) => {
      console.log(ctx.session);
      ctx.reply(
        "You Like It?",
        Markup.inlineKeyboard([
          Markup.button.callback("👍", "Yes"),
          Markup.button.callback("👎", "No"),
        ])
      );
    });

    this.bot.action("Yes", (ctx)=> {
        ctx.session.courseLike = true;
        ctx.editMessageText("🍾 GOOD!!!")
    });

    this.bot.action("No", (ctx)=> {
        ctx.session.courseLike = false;
        ctx.editMessageText("☹️")
    })
  }
}
