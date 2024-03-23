import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Aldo R. Robles' },
    {
      name: 'description',
      content:
        'Welcome to my personal website. (Aldo R. Robles)! Full Stack Developer.',
    },
  ]
}

export default function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Hello</h1>
    </div>
  )
}
