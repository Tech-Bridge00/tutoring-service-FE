import Chip from './widgets/chip/chip';

function App() {
  return (
    <div className='w-dvw h-dvh'>
      <Chip
        label='Chip'
        isSelected={false}
        onToggle={() => {}}
        size='lg'
        variant='student'
      />
    </div>
  );
}

export default App;

