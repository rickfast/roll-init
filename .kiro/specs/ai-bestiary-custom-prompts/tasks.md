# Implementation Plan

- [ ] 1. Update generateStatBlock function to support custom prompts
  - Modify function signature to accept optional customPrompt parameter
  - Enhance prompt construction logic to incorporate custom prompts when provided
  - Ensure backward compatibility by making customPrompt parameter optional
  - _Requirements: 1.3, 3.1, 3.2_

- [ ] 2. Add custom prompt state management to StatBlockForm
  - Add customPrompt state variable to component
  - Initialize customPrompt as empty string in component state
  - Ensure custom prompt state persists during form interactions and mode changes
  - _Requirements: 1.2, 4.3_

- [ ] 3. Implement custom prompt UI component in StatBlockForm
  - Add Textarea component for custom prompt input between basic parameters and generate button
  - Include clear labeling with "Additional Prompt" or similar descriptive text
  - Add helpful placeholder text with examples of useful prompt types
  - Position the field appropriately in the existing form layout
  - _Requirements: 2.1, 2.2_

- [ ] 4. Integrate custom prompt with AI generation workflow
  - Update the generate function call to pass customPrompt to generateStatBlock
  - Ensure custom prompt is included in generation request when provided
  - Maintain existing error handling and loading states with custom prompt integration
  - _Requirements: 1.3, 4.1, 4.2_

- [ ] 5. Add form validation and user experience enhancements
  - Implement optional validation for extremely long prompts (>2000 characters)
  - Ensure custom prompt field is preserved during error states
  - Add tooltip or help text explaining how custom prompts enhance generation
  - _Requirements: 2.3, 4.2_

- [ ] 6. Test the complete custom prompt functionality
  - Write unit tests for generateStatBlock function with custom prompt parameter
  - Write component tests for StatBlockForm custom prompt field behavior
  - Test integration between UI and generation function with various prompt scenarios
  - Verify backward compatibility with existing generation workflow
  - _Requirements: 3.1, 3.2, 4.4_