document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = [
        {
            title: 'Introduction to Blockchain',
            content: 'Blockchain is a distributed ledger technology that enables secure, transparent, and tamper-proof transactions. It underpins cryptocurrencies like Bitcoin and has applications in various industries.\n\n' +
                     'Blockchain operates on a peer-to-peer network, reducing the need for intermediaries and ensuring transparency. Each transaction is recorded in a block, and these blocks are linked together to form a chain. This makes it extremely difficult to alter any information once it’s added to the blockchain.\n\n' +
                     'Key Features:\n' +
                     '- Decentralization: Operates on a peer-to-peer network.\n' +
                     '- Transparency: All transactions are visible to anyone with access.\n' +
                     '- Security: Transactions are secure and tamper-proof.\n' +
                     '- Immutability: Data cannot be altered or deleted once recorded.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dO-PYw-XIT5UfBjJPtua4Orrq5QcIWnu8g&s'
        },
        {
            title: 'What is Web3?',
            content: 'Web3 is the next evolution of the internet, focusing on decentralized applications (dApps) and decentralized finance (DeFi). It leverages blockchain technology to create a more secure, user-centric web.\n\n' +
                     'Core Principles:\n' +
                     '- Decentralization: Reduces the control of large tech companies by distributing power among users.\n' +
                     '- Ownership: Users have ownership and control over their data and digital assets.\n' +
                     '- Interoperability: Enables different blockchain networks and dApps to interact seamlessly.\n' +
                     '- Privacy: Emphasizes user privacy and data protection.\n\n' +
                     'Applications:\n' +
                     '- Decentralized Finance (DeFi): Financial services that operate without traditional intermediaries.\n' +
                     '- Non-Fungible Tokens (NFTs): Unique digital assets representing ownership of specific items.\n' +
                     '- Decentralized Autonomous Organizations (DAOs): Organizations run by smart contracts and governed by members.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0U6wuY0JyFGaKreFrB-NC-Mg0BJXFXvacmw&s'
        },

    ];

    const blogContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        h2.textContent = post.title;
        const img = document.createElement('img');
        img.src = post.imageUrl;
        const p = document.createElement('p');
        p.textContent = post.content;

        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(p);

        blogContainer.appendChild(article);
    });
});
