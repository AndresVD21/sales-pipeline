/* eslint-disable-next-line */
export interface EmojiProps {
  emoji: string;
}

export const Emoji: React.FC<EmojiProps> = ({ emoji }) => {
  return (
    <span role="img" aria-label="hand pointing down">
      {emoji}
    </span>
  );
};

export default Emoji;
