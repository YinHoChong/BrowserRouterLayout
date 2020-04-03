import * as React from "react";
import { ChevronLeft } from "react-feather";

export const PageHeader = ({ onBack, children }) => {
  return (
    <header className="border-b border-gray-400 p-4">
      <div className="grid grid-cols-3">
        <div>
          {onBack && (
            <button
              className="flex items-center focus:outline-none"
              onClick={onBack}
            >
              <ChevronLeft />
              Back
            </button>
          )}
        </div>
        <span className="font-medium text-center">{children}</span>
        <div />
      </div>
    </header>
  );
};
