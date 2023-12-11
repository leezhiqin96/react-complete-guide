import { useState } from 'react';

import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import TabButton from "./TabButton.jsx"
import Tabs from './Tabs.jsx';

export default function Examples() {
  // Only call hooks inside of component functions and on the top level (cannot be nested in a function)
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton isSelected={selectedTopic == 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic == 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic == 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic == 'state'} onClick={() => handleSelect('state')}>State</TabButton>
          </>
      }>
        {/* {!selectedTopic ? <p>Please select a topic.</p> : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
        )} */}

        {/* OR */}

        {!selectedTopic && <p>Please select a topic.</p>}
        {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
        )}

        {/* OR */}
        {/* Set variable with if statement and render the variable */}
      </Tabs>

    </Section>
  )
}
