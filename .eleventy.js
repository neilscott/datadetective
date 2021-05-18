module.exports=function(eleventyConfig){
  eleventyConfig.addWatchTarget("./src/scss");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  return {
    dir: {
      input: "src",
      output: "public"
    }
  };

  eleventyConfig.addPairedShortcode("hsbox", (content, title) => {
    return '<div class="hsbox"><div class="hs__title">'
      + markdownLibrary.renderInline(title) + '</div><div class="hs__content">'
      + markdownLibrary.render(content) + '</div></div>';
  });
};
