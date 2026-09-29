export function setupInput(changeDirection) {

    const keyMap = {

        ArrowUp: "UP",
        ArrowDown: "DOWN",
        ArrowLeft: "LEFT",
        ArrowRight: "RIGHT",

        w: "UP",
        s: "DOWN",
        a: "LEFT",
        d: "RIGHT"

    };
   
    document.addEventListener(
        "keydown",
        event => {

            const direction = keyMap[event.key];

            if (direction) {

                changeDirection(
                    direction
                );

            }

        }
    );


    const buttons =
        document.querySelectorAll(
            "[data-direction]"
        );


    buttons.forEach(button => {

        button.addEventListener("click", () => {
            changeDirection(button.dataset.direction );
        }
     );

    });

}