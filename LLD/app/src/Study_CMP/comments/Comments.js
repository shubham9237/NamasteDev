import CommentBox from "./CommentBox";

const Comments = () => {

    const comments = [
        {
          username: "Akshay Saini",
          comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
          replies: [
            {
              username: "Deepika Padukone",
              comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            },
            {
              username: "Deepika Padukone",
              comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            },
          ],
        },
        {
          username: "Elon Musk",
          comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
          replies: [
            {
              username: "Deepika Padukone",
              comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
              replies: [
                {
                  username: "Deepika Padukone",
                  comment:
                    "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                  replies: [
                    {
                      username: "Deepika Padukone",
                      comment:
                        "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                      replies: [
                        {
                          username: "Deepika Padukone",
                          comment:
                            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                          replies: [
                            {
                              username: "Deepika Padukone",
                              comment:
                                "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                              replies: [
                                {
                                  username: "Deepika Padukone",
                                  comment:
                                    "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  username: "Deepika Padukone",
                  comment:
                    "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                },
              ],
            },
            {
              username: "Deepika Padukone",
              comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            },
          ],
        },
        {
          username: "Sachin Tendulkar",
          comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        },
      ];

    return (
        <div className="w-[50%] m-auto mt-10">
           <CommentBox data={comments} />
        </div>
    )
}
export default Comments;