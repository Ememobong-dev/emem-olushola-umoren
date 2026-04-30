export function calculateReadTime(content: string): string {
    const wordsPerMinute = 180;
  
    const codeBlocks = (content.match(/```[\s\S]*?```/g) || []).length;
  
    const text = content
      .replace(/```[\s\S]*?```/g, "")
      .replace(/!\[.*?\]\(.*?\)/g, "")
      .replace(/\[(.*?)\]\(.*?\)/g, "$1")
      .replace(/[#>*_`~-]/g, " ");
  
    const words = text.trim().split(/\s+/).filter(Boolean).length;
  
    const extraTime = codeBlocks * 0.3; // ~20s per block
  
    const minutes = Math.max(
      1,
      Math.ceil(words / wordsPerMinute + extraTime)
    );
  
    return `${minutes} min read`;
  }