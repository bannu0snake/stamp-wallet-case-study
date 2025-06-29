"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Calculator, TrendingDown, CheckCircle, AlertCircle, ArrowRight, Target, Zap, BarChart3 } from "lucide-react"

export default function ConsumptionLogic() {
  const [selectedScenario, setSelectedScenario] = useState("scenario1")

  const optimizationScenarios = [
    {
      id: "scenario1",
      contractValue: 170,
      availableStamps: [
        { denomination: 100, count: 5 },
        { denomination: 50, count: 8 },
        { denomination: 20, count: 12 },
        { denomination: 10, count: 15 },
      ],
      optimalCombination: [
        { denomination: 100, used: 1 },
        { denomination: 50, used: 1 },
        { denomination: 20, used: 1 },
      ],
      totalUsed: 170,
      loss: 0,
      stampsUsed: 3,
      lossPercentage: 0,
    },
    {
      id: "scenario2",
      contractValue: 175,
      availableStamps: [
        { denomination: 100, count: 3 },
        { denomination: 50, count: 2 },
        { denomination: 25, count: 8 },
      ],
      optimalCombination: [
        { denomination: 100, used: 1 },
        { denomination: 25, used: 3 },
      ],
      totalUsed: 175,
      loss: 0,
      stampsUsed: 4,
      lossPercentage: 0,
    },
    {
      id: "scenario3",
      contractValue: 180,
      availableStamps: [
        { denomination: 100, count: 4 },
        { denomination: 60, count: 6 },
      ],
      optimalCombination: [
        { denomination: 100, used: 1 },
        { denomination: 60, used: 2 },
      ],
      totalUsed: 220,
      loss: 40,
      stampsUsed: 3,
      lossPercentage: 22.2,
    },
  ]

  const performanceMetrics = [
    { metric: "Average Loss Reduction", value: "75%", trend: "down", color: "green" },
    { metric: "Optimal Combinations Found", value: "94.2%", trend: "up", color: "blue" },
    { metric: "Processing Time", value: "<50ms", trend: "down", color: "purple" },
    { metric: "Monthly Savings", value: "₹2.3L", trend: "up", color: "green" },
  ]

  const currentScenario = optimizationScenarios.find((s) => s.id === selectedScenario)

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Consumption Optimization Engine</h1>
            <p className="text-gray-600">Intelligent stamp selection to minimize duty loss</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <TrendingDown className="w-4 h-4 mr-1" />
              75% Loss Reduction
            </Badge>
            <Button variant="outline" size="sm">
              <Calculator className="w-4 h-4 mr-2" />
              Run Simulation
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="optimizer" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="optimizer">Live Optimizer</TabsTrigger>
          <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
          <TabsTrigger value="algorithm">Algorithm Logic</TabsTrigger>
        </TabsList>

        <TabsContent value="optimizer" className="mt-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Scenario Selection */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Test Scenarios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {optimizationScenarios.map((scenario) => (
                    <button
                      key={scenario.id}
                      onClick={() => setSelectedScenario(scenario.id)}
                      className={`w-full p-3 text-left rounded-lg border transition-colors ${
                        selectedScenario === scenario.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">₹{scenario.contractValue}</p>
                          <p className="text-sm text-gray-600">Contract Value</p>
                        </div>
                        <div className="text-right">
                          <p
                            className={`text-sm font-medium ${
                              scenario.loss === 0 ? "text-green-600" : "text-orange-600"
                            }`}
                          >
                            {scenario.loss === 0 ? "Perfect" : `₹${scenario.loss} loss`}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Optimization Result */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Optimization Result - ₹{currentScenario?.contractValue}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Available Stamps */}
                    <div>
                      <h4 className="font-medium mb-3">Available Inventory</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {currentScenario?.availableStamps.map((stamp, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg text-center">
                            <p className="font-semibold">₹{stamp.denomination}</p>
                            <p className="text-sm text-gray-600">{stamp.count} available</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Optimal Combination */}
                    <div>
                      <h4 className="font-medium mb-3">Optimal Combination</h4>
                      <div className="flex items-center gap-4 flex-wrap">
                        {currentScenario?.optimalCombination.map((stamp, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <p className="font-semibold text-blue-800">₹{stamp.denomination}</p>
                              <p className="text-xs text-blue-600">×{stamp.used}</p>
                            </div>
                            {index < currentScenario.optimalCombination.length - 1 && (
                              <ArrowRight className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Result Summary */}
                    <div className="grid md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">₹{currentScenario?.totalUsed}</p>
                        <p className="text-sm text-gray-600">Total Used</p>
                      </div>
                      <div className="text-center">
                        <p
                          className={`text-2xl font-bold ${
                            currentScenario?.loss === 0 ? "text-green-600" : "text-orange-600"
                          }`}
                        >
                          ₹{currentScenario?.loss}
                        </p>
                        <p className="text-sm text-gray-600">Loss</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-600">{currentScenario?.stampsUsed}</p>
                        <p className="text-sm text-gray-600">Stamps Used</p>
                      </div>
                      <div className="text-center">
                        <p
                          className={`text-2xl font-bold ${
                            currentScenario?.lossPercentage === 0 ? "text-green-600" : "text-orange-600"
                          }`}
                        >
                          {currentScenario?.lossPercentage.toFixed(1)}%
                        </p>
                        <p className="text-sm text-gray-600">Loss %</p>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2">
                      {currentScenario?.loss === 0 ? (
                        <>
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <p className="text-green-700 font-medium">Perfect optimization - Zero loss achieved</p>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5 text-orange-600" />
                          <p className="text-orange-700 font-medium">Minimal loss - Best possible combination</p>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {performanceMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className={`text-3xl font-bold mb-2 text-${metric.color}-600`}>{metric.value}</div>
                  <p className="text-sm text-gray-600 mb-2">{metric.metric}</p>
                  <div className="flex items-center justify-center gap-1">
                    <TrendingDown className={`w-4 h-4 text-${metric.color}-600`} />
                    <span className={`text-xs text-${metric.color}-600`}>
                      {metric.trend === "up" ? "Improved" : "Reduced"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Monthly Savings Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">January 2024</span>
                    <span className="font-bold text-green-600">₹1.8L saved</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">February 2024</span>
                    <span className="font-bold text-green-600">₹2.1L saved</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="text-sm font-medium">March 2024</span>
                    <span className="font-bold text-blue-600">₹2.3L saved</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Optimization Success Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Perfect Matches (0% loss)</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Minimal Loss (&lt;5%)</span>
                      <span className="text-sm font-medium">26%</span>
                    </div>
                    <Progress value={26} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Higher Loss (&gt;5%)</span>
                      <span className="text-sm font-medium">6%</span>
                    </div>
                    <Progress value={6} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="algorithm" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Optimization Algorithm Steps</CardTitle>
              <p className="text-gray-600">How the system minimizes stamp duty loss</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Identify Highest Denomination</h4>
                        <p className="text-sm text-gray-600">Find the largest stamp ≤ required amount</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Maximize Usage</h4>
                        <p className="text-sm text-gray-600">Use as many of this denomination as possible</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Iterate Down</h4>
                        <p className="text-sm text-gray-600">Move to next highest denomination for remainder</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-green-600">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Check Merge Limit</h4>
                        <p className="text-sm text-gray-600">Ensure stamp count doesn't exceed file size limits</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-green-600">5</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Evaluate Loss</h4>
                        <p className="text-sm text-gray-600">Compare potential combinations for minimum loss</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-green-600">6</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Select Optimal</h4>
                        <p className="text-sm text-gray-600">Choose combination with lowest loss percentage</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">Loss Cap Protection</h4>
                  <p className="text-sm text-yellow-700">
                    If no combination meets the loss cap criteria, the system will reject the transaction and alert the
                    user to procure additional stamps.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
