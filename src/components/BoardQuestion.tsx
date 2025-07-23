import { Button, Collapse } from "antd";
import { useState } from "react";

type TItem = {
  exam: string;
  year: number;
  board: string;
  data: {
    questions: string;
    answers: string[];
    isDifficult: boolean;
    isCompleted?: boolean;
    options?: string[];
  };
};

export default function BoardQuestion({
  data,
  title,
  questionTitle,
}: {
  data: TItem[];
  title: string;
  questionTitle: string;
}) {
  const [board, setBoard] = useState("");
  const [year, setYear] = useState("");

  // Filter logic
  const filteredData = data.filter((item) => {
    const boardMatch =
      board === "" || item.board.toLowerCase().includes(board.toLowerCase());
    const yearMatch = year === "" || item.year.toString().includes(year);
    return boardMatch && yearMatch;
  });

  return (
    <main className="p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        {title}
      </h1>

      {/* Filters */}
      <section className="flex flex-col md:flex-row md:justify-end gap-4 mb-10 flex-wrap">
        {/* Board Filter */}
        <div className="flex flex-col">
          <label
            htmlFor="boardInput"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Filter by Board
          </label>
          <input
            id="boardInput"
            onChange={(e) => setBoard(e.target.value)}
            value={board}
            placeholder="e.g., Dhaka"
            className="border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
          />
        </div>

        {/* Year Filter */}
        <div className="flex flex-col">
          <label
            htmlFor="yearInput"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Filter by Year
          </label>
          <input
            id="yearInput"
            onChange={(e) => setYear(e.target.value)}
            value={year}
            placeholder="e.g., 2023"
            className="border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
          />
        </div>

        {/* Clear Button */}
        {(board || year) && (
          <div className="flex items-end">
            <Button
              onClick={() => {
                setBoard("");
                setYear("");
              }}
              type="default"
              className="h-[40px] px-4 border-gray-400"
            >
              Clear
            </Button>
          </div>
        )}
      </section>

      {/* Data Display */}
      <section>
        {filteredData.length > 0 ? (
          filteredData.map((item, index: number) => (
            <div key={`${item.board}-${item.year}-${index}`} className="mb-12">
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <h2 className="text-lg font-semibold text-gray-800">
                  {questionTitle}
                </h2>
                <span className="text-green-600 font-bold text-base">
                  ({item.board} - {item.year})
                </span>
              </div>

              {/* Options */}
              {item?.data?.options?.length && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item?.data?.options?.map((option, i) => (
                    <span
                      key={`option-${i}`}
                      className="border border-gray-300 bg-gray-50 rounded px-3 py-2 font-medium text-sm"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              )}

              {/* Questions */}
              <p
                className="mb-5 leading-8"
                dangerouslySetInnerHTML={{ __html: item?.data?.questions }}
              />

              {/* Answers (Collapse) */}
              <Collapse
                size="large"
                items={[
                  {
                    key: "1",
                    label: "Show Answer",
                    children: (
                      <ul className="pl-5 space-y-1 font-semibold text-gray-700 flex items-center flex-wrap gap-10">
                        {item?.data?.answers?.map((answer, i) => (
                          <li key={`answer-${i}`}>{answer}</li>
                        ))}
                      </ul>
                    ),
                  },
                ]}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg">
            No data found for selected filters.
          </p>
        )}
      </section>
    </main>
  );
}
