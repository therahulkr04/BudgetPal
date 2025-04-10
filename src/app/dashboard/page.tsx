'use client'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {useState} from 'react';

export default function Dashboard() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const netBalance = income - expenses;

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Income</CardTitle>
            <CardDescription>Monthly income</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${income}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Expenses</CardTitle>
            <CardDescription>Monthly expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${expenses}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Net Balance</CardTitle>
            <CardDescription>Income less expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${netBalance >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              ${netBalance}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Add Transaction</CardTitle>
          <CardDescription>Add a new income or expense</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <Input type="number" placeholder="Amount" />
          <Input type="text" placeholder="Description" />
          <Button>Add Transaction</Button>
        </CardContent>
      </Card>
    </div>
  );
}
