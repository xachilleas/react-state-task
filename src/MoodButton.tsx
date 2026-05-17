interface MoodButtonProps {
    mood: string;
    onClick: () => void;
}

function MoodButton({mood, onClick}: MoodButtonProps) {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600"
        >
            {mood}
        </button>
    );
}

export default MoodButton;