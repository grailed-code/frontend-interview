import uppercase from "@/lib/utils/uppercase";

describe("uppercase", () => {
  it("should capitalize the first letter of a word", () => {
    expect(uppercase("word")).toBe("Word");
  });

  it("should return the same word if it starts with a non-letter character", () => {
    expect(uppercase("1word")).toBe("1word");
  });

  it("should return an empty string if no word is provided", () => {
    expect(uppercase("")).toBe("");
  });

  it("should handle words with uppercase letters", () => {
    expect(uppercase("Word")).toBe("Word");
  });

  it("should handle single-letter words", () => {
    expect(uppercase("w")).toBe("W");
  });

  it("should handle words with special characters", () => {
    expect(uppercase("w@rd")).toBe("W@rd");
  });

  it("should handle words with numbers", () => {
    expect(uppercase("w3rd")).toBe("W3rd");
  });

  // Add more tests as needed
});
