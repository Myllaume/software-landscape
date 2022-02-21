mermaid.initialize({ startOnLoad: true });

(function () {
    const documents = document.querySelectorAll('.document');
    
    for (const doc of documents) {
        const heads = doc.querySelectorAll('.tabs [data-tab]')
            , bodies = doc.querySelectorAll('.bodies [data-tab]');

        let activeHead = doc.querySelector('.tabs [data-tab].is-active')
            , activeBody = doc.querySelector('.bodies [data-tab].is-active')

        for (let i = 0; i < heads.length; i++) {
            const head = heads[i];
            head.addEventListener('click', () => {
                const body = bodies[i];

                activeHead.classList.remove('is-active');
                activeBody.classList.remove('is-active');

                body.classList.add('is-active');
                head.classList.add('is-active');

                activeHead = head;
                activeBody = body;
            });
        }
    }
})();