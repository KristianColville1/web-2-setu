export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets"); // Adds assets directory
    return {
        dir: {
            input: "src", // Sets the input directory
            layouts: "components/layouts", // Sets the layouts directory
            includes: "components/partials", // Sets the includes directory
        }
    };
}
