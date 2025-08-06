"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Bell, AlertTriangle, TrendingUp, Settings, Clock, Target } from "lucide-react"

export default function AlertEngine() {
  const [selectedAlert, setSelectedAlert] = useState(null)

  const alerts = [
    {
      id: 1,
      client: "XYZ Bank",
      state: "Karnataka",
      articleCode: "KA1008",
      denomination: "₹500",
      currentBalance: 45,
      threshold: 100,
      requiredQty: 200,
      urgency: "high",
      daysLeft: 2,
      monthlyUsage: 150,
      status: "active",
    },
    {
      id: 2,
      client: "Tech Startup",
      state: "Maharashtra",
      articleCode: "MH2001",
      denomination: "₹100",
      currentBalance: 25,
      threshold: 50,
      requiredQty: 100,
      urgency: "medium",
      daysLeft: 5,
      monthlyUsage: 75,
      status: "active",
    },
    {
      id: 3,
      client: "XYZ Bank",
      state: "Tamil Nadu",
      articleCode: "TN3005",
      denomination: "₹1000",
      currentBalance: 8,
      threshold: 30,
      requiredQty: 60,
      urgency: "critical",
      daysLeft: 1,
      monthlyUsage: 40,
      status: "active",
    },
  ]

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getProgressColor = (percentage: number) => {
    if (percentage <= 25) return "bg-red-500"
    if (percentage <= 50) return "bg-orange-500"
    return "bg-green-500"
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Wallet Alert Engine</h1>
            <p className="text-gray-600">Intelligent monitoring and predictive alerts</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
              <AlertTriangle className="w-4 h-4 mr-1" />3 Active Alerts
            </Badge>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Alert Settings
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="alerts" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
          <TabsTrigger value="patterns">Consumption Patterns</TabsTrigger>
          <TabsTrigger value="settings">Alert Configuration</TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="mt-6">
          <div className="grid gap-6">
            {alerts.map((alert) => {
              const balancePercentage = (alert.currentBalance / alert.threshold) * 100
              return (
                <Card key={alert.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Bell className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{alert.client}</CardTitle>
                          <p className="text-sm text-gray-600">
                            {alert.state} • {alert.articleCode}
                          </p>
                        </div>
                      </div>
                      <Badge className={getUrgencyColor(alert.urgency)}>{alert.urgency.toUpperCase()}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Current Balance</p>
                        <p className="text-2xl font-bold text-gray-900">{alert.currentBalance}</p>
                        <p className="text-sm text-gray-600">{alert.denomination} stamps</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Threshold</p>
                        <p className="text-lg font-semibold text-gray-700">{alert.threshold}</p>
                        <div className="mt-2">
                          <Progress value={balancePercentage} className="h-2" />
                          <p className="text-xs text-gray-500 mt-1">{Math.round(balancePercentage)}% of threshold</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Required Quantity</p>
                        <p className="text-lg font-semibold text-blue-600">{alert.requiredQty}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <p className="text-xs text-gray-500">{alert.daysLeft} days left</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-end">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Create Order
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="patterns" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Consumption Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">XYZ Bank - Karnataka</p>
                      <p className="text-sm text-gray-600">₹500 stamps</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">↗ 15%</p>
                      <p className="text-xs text-gray-500">vs last month</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Tech Startup - Maharashtra</p>
                      <p className="text-sm text-gray-600">₹100 stamps</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-600">↘ 8%</p>
                      <p className="text-xs text-gray-500">vs last month</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Prediction Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">94.5%</div>
                    <p className="text-sm text-gray-600">Alert accuracy rate</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-semibold text-green-600">127</div>
                      <p className="text-xs text-gray-500">Successful predictions</p>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-red-600">7</div>
                      <p className="text-xs text-gray-500">Missed alerts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Alert Configuration</CardTitle>
              <p className="text-gray-600">Configure alert parameters for different clients</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Buffer Factor</h4>
                    <p className="text-2xl font-bold text-blue-600">1.1x</p>
                    <p className="text-sm text-gray-600">Accounts for 3-day TAT</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Default Threshold</h4>
                    <p className="text-2xl font-bold text-green-600">30 days</p>
                    <p className="text-sm text-gray-600">Minimum inventory period</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Max Wallet Balance</h4>
                    <p className="text-2xl font-bold text-purple-600">60 days</p>
                    <p className="text-sm text-gray-600">Maximum inventory period</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
