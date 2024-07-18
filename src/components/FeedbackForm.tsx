import { MAX_CHARACTERS } from "../lib/constants";
import { useState } from "react";

type FeedBackFormProps = {
  onAddToList: (text: string) => void;
};

export default function FeedbackForm({ onAddToList }: FeedBackFormProps) {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;

    if (newText.length > MAX_CHARACTERS) {
      return;
    }

    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddToList(text);
    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
