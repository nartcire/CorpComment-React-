import { MAX_CHARACTERS } from "../lib/constants";
import { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;

    if (newText.length > MAX_CHARACTERS) {
      return;
    }

    setText(event.target.value);
  };

  return (
    <form className="form">
      <textarea
        value={text}
        id="feedback-textarea"
        placeholder="blabla"
        spellCheck={false}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
