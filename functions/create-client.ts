import { Request, Response } from "express";
import { nhost } from "./nhost";

import gql from "graphql-tag";

const INSERT_USER_TRANSACTION = gql`
  mutation InsertUserTransaction(
    $delay: String
    $transactionId: String
    $userId: uuid
    $workspaceId: uuid
    $payload: json
  ) {
    insert_user_transactions(
      objects: {
        delay: $delay
        transactionId: $transactionId
        userId: $userId
        workspaceId: $workspaceId
        payload: $payload
      }
    ) {
      returning {
        id
        payload
        delay
        transactionId
        userId
        workspaceId
      }
    }
  }
`;

export default async (req: Request, res: Response) => {
  console.log("=====================");
  console.log(req.body);
  console.log("=====================");

  const { data, error } = await nhost.graphql.request(INSERT_USER_TRANSACTION, {
    params: { ...req.body },
  });
  res.status(200).json({ data, error });
};
