/* eslint-disable-next-line */
export interface EmojiProps {
  emoji: string;
  label: string;
}

export const Emoji: React.FC<EmojiProps> = ({ emoji, label }) => {
  return (
    <span role="img" aria-label={label}>
      {emoji}
    </span>
  );
};

export default Emoji;
