export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets"); // Adds assets directory
    return {
        dir: {
            input: "src/pages", // Sets the input directory
        }
    };
}
