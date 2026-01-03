const addDataBtn = document.getElementById("addData");
const delDataBtn = document.getElementById("delData");

async function loadPosts() {
    try {
        const res = await fetch("http://localhost:4000/api/v1/posts");
        const data = await res.json();

        data.forEach(post => {
            let update = null;

            switch (post.category.toLowerCase()) {
                case "project":
                    update = document.getElementById("project");
                    break;
                default:
                    console.log("Insert new div with new category before adding something new.")
            }

            if (update) {
                const thatPost = document.createElement("div");

                const link = post.link

                thatPost.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                    <a href="${post.link}" class="learn" target="_blank">Learn more</a>
                    </br></br>
                `;

                update.appendChild(thatPost);

                console.log(post.title, post._id);
            }
            
        })
    } catch (error) {
        console.error("Error loading posts", error);
    }
}

// for adding data into db
addDataBtn.addEventListener("click", async () => {
    await fetch("http://localhost:4000/api/v1/posts/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            category: "Project",
            title: "Emcolour Me - A Chrome Extension", 
            description: "Empower Our World, Colour Our World. I hope that this chrome extension empowers persons with colour deficiency while using the internet.",
            link: "https://dribbble.com/shots/25377634-Emcolour-Me-A-Chrome-Extension"
        })
    });

    loadPosts();
});



delDataBtn.addEventListener("click", async () => {
    const id = "6957befe71da6d7bdaa67310";

    try {
        const response = await fetch(`http://localhost:4000/api/v1/posts/delete/${id}`, { method: "DELETE" });

        if (response.ok) {
            loadPosts();
        } else {
            console.error("Failed to delete post");
        }
    } catch (error) {
        console.error("Error deleting post", error);
    }

});