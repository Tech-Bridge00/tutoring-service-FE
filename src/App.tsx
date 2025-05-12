import Button from './widgets/button/Button';

function App() {
  return (
    <div className='w-dvw h-dvh p-8'>
      <h1 className='text-2xl font-bold mb-6'>버튼 컴포넌트 예시</h1>

      <div className='mb-8'>
        <h2 className='text-lg font-semibold mb-3'>
          학생용 버튼 (student theme)
        </h2>
        <div className='flex flex-col gap-4 mb-4'>
          <div className='flex gap-4'>
            <Button
              label='Primary SM'
              variant='primary'
              theme='student'
              size='sm'
            />
            <Button
              label='Primary MD'
              variant='primary'
              theme='student'
              size='md'
            />
            <Button
              label='Primary LG'
              variant='primary'
              theme='student'
              size='lg'
            />
          </div>
          <div className='flex gap-4'>
            <Button
              label='Outline SM'
              variant='outline'
              theme='student'
              size='sm'
            />
            <Button
              label='Outline MD'
              variant='outline'
              theme='student'
              size='md'
            />
            <Button
              label='Outline LG'
              variant='outline'
              theme='student'
              size='lg'
            />
          </div>
        </div>
      </div>

      <div className='mb-8'>
        <h2 className='text-lg font-semibold mb-3'>
          선생님용 버튼 (teacher theme)
        </h2>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <Button
              label='Primary SM'
              variant='primary'
              theme='teacher'
              size='sm'
            />
            <Button
              label='Primary MD'
              variant='primary'
              theme='teacher'
              size='md'
            />
            <Button
              label='Primary LG'
              variant='primary'
              theme='teacher'
              size='lg'
            />
          </div>
          <div className='flex gap-4'>
            <Button
              label='Outline SM'
              variant='outline'
              theme='teacher'
              size='sm'
            />
            <Button
              label='Outline MD'
              variant='outline'
              theme='teacher'
              size='md'
            />
            <Button
              label='Outline LG'
              variant='outline'
              theme='teacher'
              size='lg'
            />
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='text-lg font-semibold mb-3'>추가 속성 적용 예시</h2>
        <div className='flex gap-4'>
          <Button
            label='Disabled Button'
            variant='primary'
            theme='student'
            disabled
          />
          <Button
            label='Custom Class'
            variant='primary'
            theme='teacher'
            className='shadow-lg hover:opacity-80'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
