import { Request, Response } from "express";
import { novu } from "./_novu";

export default async (req: Request, res: Response) => {
  const { payload, subscriber, triggerId } = req.body;

  const response = await novu.trigger(triggerId, {
    to: {
      ...subscriber,
    },
    payload,
  });

  res.status(200).json({ data: response.data });
};
