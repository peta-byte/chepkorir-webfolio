import { animate, style, trigger, transition, state } from "@angular/animations";

export const nextAnimation = trigger("next", [
  state("in", style({ transform: "translateY(0)", opacity: "0" })),

  transition("void => *", [
    style({ transform: "translateY(-15px)", opacity: "1" }),
    animate(400)
  ])
]);
