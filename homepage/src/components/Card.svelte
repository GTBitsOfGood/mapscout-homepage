<script>
    export let title;
    export let discription;
    export let image;
</script>

<style>
    div {
        width: 20vw;
        margin: 0 2vw 0 0;
        min-height: 40vh;
        display: flex;
        flex-direction: column;
        align-items: space-between;
    }

    img {
        width: 20vw;
        height: 30vh;
        border-radius: 10px;
		background: #C4C4C4;
    }

    span {
        padding: 2vh 0 2vh 0;
        font-weight: 500;
    }

    p {
        font-size: 1vw;
    }

    @media only screen and (max-width: 768px) {
        div {
            width: 75vw;
        }

        img {
            width: 75vw;
        }

        p {
            font-size: 3.5vw;
        }
    }
</style>

<div>
    <img src={image} alt={title+"_image"}/>
    <span>{title}</span>
    <p>{discription}</p>
</div>