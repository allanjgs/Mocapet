'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data)
  })


  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" {...form.register('email')}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" {...form.register('password')}/>
        </div>
        <Button className="w-full" type="submit">
          Login
        </Button>
        <Button className="w-full" variant="outline">
          Login with Google
        </Button>
      </form>
    </div>
  )
}

