

const ActionButton = () => {
    return (
        <div className="flex gap-2">
            <button type="submit" className="button-primary">
                Add Cars
            </button>

            <button type="reset" className="button-outline">
                Reset
            </button>
        </div>
    );
};

export default ActionButton;