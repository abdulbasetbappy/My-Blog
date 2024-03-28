import { ref } from 'vue'

export interface ISimpleTableData {
  city: string
  totalOrders: string
}

export interface IPaginatedTableData {
  name: string
  role: string
  created: string
  status: string
  statusColor: string
}

export interface IWideTableData {
  name: string
  email: string
  title: string
  title2: string
  status: string
  role: string
}

export function useTableData() {
  const simpleTableData = ref<ISimpleTableData[]>([
    { city: 'New York', totalOrders: '200,120' },
    { city: 'Manchester', totalOrders: '632,310' },
    { city: 'London', totalOrders: '451,110' },
    { city: 'Madrid', totalOrders: '132,524' },
  ])

  const paginatedTableData = ref<IPaginatedTableData[]>([
    {
      name: 'What is the name of the customer! Did You Know',
      role: 'VueJs',
      created: 'Jan 21, 2020',
      status: 'Active',
      statusColor: 'green',
    },
    {
      name: 'What is JavaScurt! Did You Know',
      role: 'HTMl',
      created: 'Jan 01, 2020',
      status: 'Active',
      statusColor: 'green',
    },
    {
      name: 'JavaScript is The Best Thing! Did You Know',
      role: 'CSS',
      created: 'Jan 10, 2020',
      status: 'Suspended',
      statusColor: 'orange',
    },
    {
      name: 'this a alone type elo bssgh ys as Cox',
      role: 'SCSS',
      created: 'Jan 18, 2020',
      status: 'Inactive',
      statusColor: 'red',
    },
  ])

  const wideTableData = ref<IWideTableData[]>(
    [...Array(10).keys()].map(() => ({
      name: 'John Doe',
      email: 'john@example.com',
      title: 'Software Engineer',
      title2: 'Web dev',
      status: 'Active',
      role: 'Owner',
    })),
  )

  return {
    simpleTableData,
    paginatedTableData,
    wideTableData,
  }
}
