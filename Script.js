
        // Variáveis necessárias para o seu código
        let isHolding = false;
        let scanTimeout;

        const fingerprintBox = document.getElementById("fingerprintBox");
        const scanText = document.getElementById("scanText");
        const mudar = document.getElementById("mudar")


        // Função chamada quando a digital é reconhecida
        function triggerSuccess() {
            isHolding = false;

            fingerprintBox.classList.remove("scanning");
            fingerprintBox.classList.add("success");

            scanText.textContent = "Você é muito Linda :)💕";
            
            mudar.textContent= "❤️"

            createHearts();

        

    
        }


        // Seu código
        function startHolding(e) {
            e.preventDefault();

            if (isHolding) return;

            isHolding = true;

            fingerprintBox.classList.add("scanning");

            scanText.textContent =
                "Reconhecendo digital... Não solte ✨";

            scanTimeout = setTimeout(() => {
                triggerSuccess();
            }, 2000);
        }


        function stopHolding(e) {
            if (!isHolding) return;

            isHolding = false;

            fingerprintBox.classList.remove("scanning");

            // Cancela o reconhecimento caso solte antes dos 2,5 segundos
            clearTimeout(scanTimeout);

            scanText.textContent =
                "Pressione e segure a digital";
        }
        
        function createHearts() {
            for (let i = 0; i < 15; i++) {
                const heart = document.createElement("div");

                heart.classList.add("heart");
                heart.textContent = "❤️";

                // Posição aleatória
                heart.style.left = Math.random() * 100 + "vw";
                heart.style.top = (50 + Math.random() * 40) + "vh";

                // Tamanho aleatório
                heart.style.fontSize = (20 + Math.random() * 30) + "px";

                // Velocidade aleatória
                heart.style.animationDuration =
                    (1 + Math.random() * 1.5) + "s";

                document.body.appendChild(heart);

                // Remove depois da animação
                setTimeout(() => {
                    heart.remove();
                }, 2500);
            }
}


        // Mouse
        fingerprintBox.addEventListener("mousedown", startHolding);
        fingerprintBox.addEventListener("mouseup", stopHolding);
        fingerprintBox.addEventListener("mouseleave", stopHolding);


        // Celular / tela touch
        fingerprintBox.addEventListener("touchstart", startHolding);
        fingerprintBox.addEventListener("touchend", stopHolding);
        fingerprintBox.addEventListener("touchcancel", stopHolding);
