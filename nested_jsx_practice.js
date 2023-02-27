// 1.Declare a new variable named myDiv. Set myDiv equal to a JSX <div></div> element.
// Wrap the <div></div> in parentheses, and use indentation and line breaks like in the examples. In between the <div></div> tags, nest an <h1></h1> containing the text Hello world.
const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
)

// 1.Your friend’s blog is down! He’s asked you to fix it.

// You immediately diagnose the problem: a JSX expression with multiple outer elements.

// Repair your friend’s broken code by wrapping their JSX in a <div></div>.

const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>Welcome to Dan's Blog!</h1>
    <article>
      Wow I had the tastiest sandwich today. I <strong>literally</strong> almost
      freaked out.
    </article>
  </div>
)
