/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPoll = /* GraphQL */ `
  mutation CreatePoll(
    $input: CreatePollInput!
    $condition: ModelPollConditionInput
  ) {
    createPoll(input: $input, condition: $condition) {
      id
      name
      questions {
        items {
          id
          title
          pollID
          choices
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePoll = /* GraphQL */ `
  mutation UpdatePoll(
    $input: UpdatePollInput!
    $condition: ModelPollConditionInput
  ) {
    updatePoll(input: $input, condition: $condition) {
      id
      name
      questions {
        items {
          id
          title
          pollID
          choices
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePoll = /* GraphQL */ `
  mutation DeletePoll(
    $input: DeletePollInput!
    $condition: ModelPollConditionInput
  ) {
    deletePoll(input: $input, condition: $condition) {
      id
      name
      questions {
        items {
          id
          title
          pollID
          choices
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      title
      pollID
      choices
      poll {
        id
        name
        questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      answers {
        items {
          id
          questionID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      title
      pollID
      choices
      poll {
        id
        name
        questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      answers {
        items {
          id
          questionID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      title
      pollID
      choices
      poll {
        id
        name
        questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      answers {
        items {
          id
          questionID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      questionID
      content
      question {
        id
        title
        pollID
        choices
        poll {
          id
          name
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
      id
      questionID
      content
      question {
        id
        title
        pollID
        choices
        poll {
          id
          name
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
      id
      questionID
      content
      question {
        id
        title
        pollID
        choices
        poll {
          id
          name
          createdAt
          updatedAt
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
