export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("data"); // Adds data directory
    return {
        dir: {
            input: "src", // Sets the input directory
        }
    };
}
