const checkDOM = (stringDOM) => {
  const tags = ["b", "i", "em", "div", "p", "/b", "/i", "/em", "/div", "/p"];
  const regex = /<[^>]+>/g;
  const splitted = stringDOM.match(regex);

  const openings = [];
  const closings = {};
  const regex2 = /<([^>]+)>/g;
  splitted.forEach((item, index) => {
    const tag = item.split(regex2)[1];
    if (tags.includes(tag)) {
      if (tag.includes("/")) {
        const i = Object.keys(closings).length + 1;
        closings[tag] = i;
      } else {
        const i = openings.length + 1;
        openings.push({ tag, i });
      }
    }
  });

  let problem = null;

  if (openings.length !== Object.keys(closings).length) return false;

  // Check if the tag is closed
  for (let i = 0; i < openings.length; i++) {
    if (!closings[`/${openings[i].tag}`]) return openings[i].tag;
  }

  // Check if the nesting is correct
  for (let i = 0; i < openings.length; i++) {
    if (
      Math.abs(closings[`/${openings[i].tag}`] - openings.length) + 1 !==
      openings[i].i
    ) {
      return openings[i].tag;
    } else {
      return true;
    }
  }

  if (problem) return problem;

  return true;
};

const result = checkDOM("<div><b><p>hello world</p></b></div>");
console.log(result);
