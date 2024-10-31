const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

function injectCards() {
    const container = document.querySelector(".container");
    const cardsData = [
        {
            title: "Algorithm",
            image: "assets/images/1.png",
            description: "The algorithm's workings are shrouded in complexity.",
        },
        {
            title: "Dogma",
            image: "assets/images/2.png",
            description:
                "Enshrining the principles of conformity and reinforcing the status quo.",
        },
        {
            title: "Architects",
            image: "assets/images/3.png",
            description:
                "The elusive entities, lacking human form, operate in the shadows.",
        },
        {
            title: "Wasteland",
            image: "assets/images/4.png",
            description:
                "This overlooked realm, a consequence of algorithmic judgments.",
        },
        {
            title: "Narrative",
            image: "assets/images/5.png",
            description: "The collective story sculpted by the architects.",
        },
        {
            title: "Opulence",
            image: "assets/images/6.png",
            description: "The cognitive elite's wealth in the algorithmic society.",
        },
    ];

    cardsData.map((cardData) => {
        const card = `<div class="card sticky top-8 md:top-28 w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%] 2xl:w-[32vw] bg-[#2F251E] text-white text-center rounded-xl flex flex-col items-center gap-5 py-28">
                <div class="card-image w-[30vw] md:w-[20vw] xl:w-[15vw] aspect-square">
                    <img src="${cardData.image}">
                </div>
                <div class="card-content">
                    <h2 class="text-5xl lg:text-7xl font-light uppercase">The <br> <span class="font-bold">${cardData.title}</span></h2>
                    <p class="w-full min-[540px]:w-[90%] lg:w-[80%] mx-auto text-xl lg:text-2xl leading-[1] font-light mt-10">${cardData.description}</p>
                </div>
            </div>`;

        container.innerHTML += card;
    });
}
injectCards();

const cards = document.querySelectorAll(".card").forEach((card) => {
    gsap.to(card, {
        opacity: 0,
        scale: 0.8,
        scrollTrigger: {
            trigger: card,
            start: "top 112px",
            end: "bottom 112px",
            // markers: true,
            scrub: 1.5,
        },
    });
});
