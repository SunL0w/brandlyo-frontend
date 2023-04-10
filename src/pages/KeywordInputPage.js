import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setKeywords } from '../actions/nameGeneratorActions';

const KeywordInputPage = () => {
  const keywords = useSelector((state) => state.nameGenerator.keywords);
  const dispatch = useDispatch();

  const handleKeywordsChange = (event) => {
    const newKeywords = event.target.value.split(',');
    dispatch(setKeywords(newKeywords));
  };

  return (
    <div>
      {/* Le reste de votre code ici */}
      <input
        type="text"
        value={keywords.join(',')}
        onChange={handleKeywordsChange}
      />
    </div>
  );
};

export default KeywordInputPage;
