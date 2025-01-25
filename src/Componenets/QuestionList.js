import React from "react";
function QuestionList({ question ,options,handleClick,currentAnswar}) {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={()=>handleClick(option)} className={currentAnswar===
            option ? 'selected' :''}>{option}</li>

        ))}
      </ul>
    </div>
  );
}
export default QuestionList;