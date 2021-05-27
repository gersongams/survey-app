/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePoll = /* GraphQL */ `
  subscription OnCreatePoll {
    onCreatePoll {
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
export const onUpdatePoll = /* GraphQL */ `
  subscription OnUpdatePoll {
    onUpdatePoll {
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
export const onDeletePoll = /* GraphQL */ `
  subscription OnDeletePoll {
    onDeletePoll {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
