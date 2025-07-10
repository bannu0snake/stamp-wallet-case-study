"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Quote,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Users,
  FileText,
  Clock,
  Target,
  ArrowUpRight,
  Filter,
  Upload,
  Bell,
  Eye,
  Wallet,
  TrendingUp,
  Shield,
} from "lucide-react"
import Image from "next/image"
import AlertEngine from "@/components/alert-engine"
import ConsumptionLogic from "@/components/consumption-logic"

export default function CaseStudyPage() {
  const [activeSection, setActiveSection] = useState("intro")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-5xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
              <span className="text-sm font-medium text-slate-700">Case Study</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-slate-500">
              {[
                { id: "intro", label: "Overview" },
                { id: "problem", label: "Problem" },
                { id: "research", label: "Research" },
                { id: "design", label: "Design" },
                { id: "outcomes", label: "Impact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-slate-900 ${
                    activeSection === item.id ? "text-slate-900 font-medium" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="outline" className="text-xs text-slate-600 border-slate-200 bg-slate-50">
                  Enterprise UX
                </Badge>
                <Badge variant="outline" className="text-xs text-slate-600 border-slate-200 bg-slate-50">
                  3 months
                </Badge>
                <Badge variant="outline" className="text-xs text-slate-600 border-slate-200 bg-slate-50">
                  2024
                </Badge>
              </div>
              <h1 className="text-3xl font-semibold text-slate-900 mb-4 leading-tight">
                Stamp Wallet Management System
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                How we designed an intelligent stamp wallet ecosystem that automated inventory monitoring, optimized
                consumption, and reduced procurement errors by 87% for enterprise clients.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  HDFC Bank & Enterprise Clients
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />3 months
                </span>
                <span className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Automated wallet management
                </span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src="/images/hero-dashboard.png"
                  alt="Stamp Wallet Management System - Laptop Mockup"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-lg shadow-sm border border-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="intro" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Project Overview</h2>
            <div className="w-12 h-px bg-slate-300 mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Signzy's Contract360 needed a comprehensive stamp wallet management system to automate digital stamp
                  procurement, monitor inventory, and optimize consumption for enterprise clients processing thousands
                  of contracts monthly.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">My Role</h3>
                    <p className="text-slate-900 font-medium">Product Designer</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Timeline</h3>
                    <p className="text-slate-900 font-medium">3 months</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-6">The Challenge</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                      <AlertTriangle className="w-5 h-5 text-red-500 mb-4" />
                      <h4 className="font-medium text-slate-900 mb-2">Manual Monitoring</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        No automated alerts for low wallet balance leading to contract delays
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                      <Clock className="w-5 h-5 text-orange-500 mb-4" />
                      <h4 className="font-medium text-slate-900 mb-2">Inefficient Consumption</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        No optimization logic causing excess stamp duty loss
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mb-4" />
                      <h4 className="font-medium text-slate-900 mb-2">Complex Procurement</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        9-step manual process involving multiple stakeholders
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Enterprise clients like HDFC Bank needed an intelligent system to automatically monitor stamp
                    inventory, optimize consumption to minimize loss, and streamline the procurement workflow across
                    multiple stakeholders.
                  </p>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-4">
                    <Quote className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <blockquote className="text-slate-700 mb-4 leading-relaxed">
                        We needed a system that could predict our stamp requirements, automatically alert us before we
                        run out, and optimize consumption to minimize waste. The manual process was unsustainable for
                        our volume.
                      </blockquote>
                      <cite className="text-sm text-slate-500">— Revenue Manager, HDFC Bank</cite>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-6">System Goals</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Wallet className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1">Automated Monitoring</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Intelligent alerts based on consumption patterns and buffer factors
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1">Consumption Optimization</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Minimize stamp duty loss through intelligent combination algorithms
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1">Streamlined Procurement</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Reduce 9-step manual process to automated workflow
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1">Multi-stakeholder Visibility</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Transparent tracking for clients, ops team, and finance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Understanding the Problem</h2>
            <div className="w-12 h-px bg-slate-300 mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              The existing stamp management process was a complex, manual workflow involving multiple stakeholders and
              causing significant operational inefficiencies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                <Image
                  src="/images/broken-process.png"
                  alt="The complex 9-step manual process"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-6">The 9-Step Manual Process</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 border border-red-100">
                    <span className="font-medium text-red-600 text-xs">1-2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Client Request & Sales Coordination</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Client emails stamp details → Sales shares with ops team
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 border border-red-100">
                    <span className="font-medium text-red-600 text-xs">3-4</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Feasibility Checks</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Ops confirms service feasibility → Vendor feasibility check
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 border border-red-100">
                    <span className="font-medium text-red-600 text-xs">5-6</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Financial Processing</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Finance request → Invoice generation and approval
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 border border-red-100">
                    <span className="font-medium text-red-600 text-xs">7-9</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Procurement & Upload</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Payment confirmation → Procurement → Manual upload with potential errors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <h4 className="font-medium text-slate-900 mb-3">No Predictive Monitoring</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                "Clients would run out of stamps mid-contract execution because there was no system to predict
                consumption patterns or alert before depletion."
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h4 className="font-medium text-slate-900 mb-3">Consumption Inefficiency</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                "Without optimization logic, clients were losing significant money on excess stamp duty. A ₹170
                requirement might consume ₹200 worth of stamps."
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h4 className="font-medium text-slate-900 mb-3">Upload Errors</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                "Ops team would sometimes upload stamps with wrong article codes, causing compliance issues that were
                discovered only during audits."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Research & Discovery</h2>
            <div className="w-12 h-px bg-slate-300 mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              I conducted extensive research across the entire stamp ecosystem to understand the needs of all
              stakeholders.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <Card className="overflow-hidden border border-gray-100">
                <div className="h-24 bg-blue-50 flex items-center justify-center border-b border-gray-100">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Stakeholder Interviews</h3>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                    15 interviews across revenue managers, legal associates, ops team, and finance personnel
                  </p>
                  <div className="text-sm text-blue-600 font-medium">Key insight: Need for predictive monitoring</div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border border-gray-100">
                <div className="h-24 bg-green-50 flex items-center justify-center border-b border-gray-100">
                  <FileText className="w-6 h-6 text-green-500" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Process Analysis</h3>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                    Detailed mapping of the 9-step procurement process and consumption patterns
                  </p>
                  <div className="text-sm text-green-600 font-medium">Key insight: 60% time spent on coordination</div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border border-gray-100">
                <div className="h-24 bg-purple-50 flex items-center justify-center border-b border-gray-100">
                  <Target className="w-6 h-6 text-purple-500" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Data Analysis</h3>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                    Analysis of consumption patterns, loss calculations, and procurement TAT across clients
                  </p>
                  <div className="text-sm text-purple-600 font-medium">Key insight: 15-20% average stamp duty loss</div>
                </CardContent>
              </Card>
            </div>

            <div className="sticky top-24">
              <div className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                <Image
                  src="/images/user-research.jpg"
                  alt="Research session with stakeholders"
                  width={500}
                  height={375}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded text-sm">
                  Research session with revenue managers and ops team
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-lg font-semibold text-slate-900 mb-8">Key User Personas</h3>
            <Tabs defaultValue="persona1" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white border border-gray-100">
                <TabsTrigger value="persona1" className="text-sm">
                  Revenue Managers
                </TabsTrigger>
                <TabsTrigger value="persona2" className="text-sm">
                  Legal Associates
                </TabsTrigger>
                <TabsTrigger value="persona3" className="text-sm">
                  Operations Team
                </TabsTrigger>
              </TabsList>

              <TabsContent value="persona1" className="mt-6">
                <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-6">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64&text=PS" />
                      <AvatarFallback className="bg-blue-200 text-blue-800 text-lg font-semibold">PS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-1">Priya Sharma</h4>
                      <p className="text-blue-600 font-medium mb-6">Revenue Manager, HDFC Bank</p>

                      <div className="grid md:grid-cols-3 gap-6 text-sm">
                        <div>
                          <h5 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4 text-blue-600" />
                            Goals
                          </h5>
                          <ul className="space-y-2 text-slate-600">
                            <li>• Maintain optimal stamp inventory levels</li>
                            <li>• Minimize stamp duty loss across operations</li>
                            <li>• Ensure compliance across multiple states</li>
                            <li>• Track procurement costs and ROI</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                            <Eye className="w-4 h-4 text-green-600" />
                            Needs
                          </h5>
                          <ul className="space-y-2 text-slate-600">
                            <li>• Predictive alerts for low inventory</li>
                            <li>• Consumption pattern analysis</li>
                            <li>• Automated procurement workflows</li>
                            <li>• Real-time visibility into stamp usage</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                            Pain Points
                          </h5>
                          <ul className="space-y-2 text-slate-600">
                            <li>• No automated monitoring system</li>
                            <li>• High stamp duty loss (15-20%)</li>
                            <li>• Manual coordination across teams</li>
                            <li>• Lack of consumption optimization</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                        <p className="text-slate-700 italic leading-relaxed">
                          "I need a system that can predict our stamp requirements based on our contract volume and
                          automatically alert us before we run out, while also optimizing consumption to minimize
                          waste."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="persona2" className="mt-6">
                <div className="bg-green-50 p-8 rounded-lg border border-green-100">
                  <div className="flex items-start gap-6">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64&text=RK" />
                      <AvatarFallback className="bg-green-200 text-green-800 text-lg font-semibold">RK</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-1">Rajesh Kumar</h4>
                      <p className="text-green-600 font-medium mb-6">Legal Associate, Tech Startup</p>

                      <div className="grid md:grid-cols-3 gap-6 text-sm">
                        <div>
                          <h5 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4 text-blue-600" />
                            Goals
                          </h5>
                          <ul className="space-y-2 text-slate-600">
                            <li>• Ensure stamp availability for contracts</li>
                            <li>• Self-manage stamp procurement</li>
                            <li>• Maintain compliance standards</li>
                            <li>• Minimize operational disruptions</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                            <Eye className="w-4 h-4 text-green-600" />
                            Needs
                          </h5>
                          <ul className="space-y-2 text-slate-600">
                            <li>• Simple threshold-based alerts</li>
                            <li>• Easy order creation process</li>
                            <li>• Clear wallet balance visibility</li>
                            <li>• Email notifications for low balance</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                            Pain Points
                          </h5>
                          <ul className="space-y-2 text-slate-600">
                            <li>• Manual monitoring of stamp levels</li>
                            <li>• Reactive procurement approach</li>
                            <li>• No consumption insights</li>
                            <li>• Risk of running out mid-contract</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                        <p className="text-slate-700 italic leading-relaxed">
                          "I want to set a threshold and get notified when my stamp balance drops below it, so I can
                          place orders proactively without worrying about running out."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="persona3" className="mt-6">
                <div className="bg-purple-50 p-8 rounded-lg border border-purple-100">
                  <div className="flex items-start gap-6">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64&text=MP" />
                      <AvatarFallback className="bg-purple-200 text-purple-800 text-lg font-semibold">
                        MP
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-1">Meera Patel</h4>
                      <p className="text-purple-600 font-medium mb-6">Operations Manager, Signzy</p>

                      <div className="grid md:grid-cols-3 gap-6 text-sm">
                        <div>
                          <h5 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4 text-blue-600" />
                            Goals
                          </h5>
                          <ul className="space-y-2 text-slate-600">
                            <li>• Streamline order fulfillment process</li>
                            <li>• Reduce manual coordination effort</li>
                            <li>• Minimize upload errors</li>
                            <li>• Improve client satisfaction</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                            <Eye className="w-4 h-4 text-green-600" />
                            Needs
                          </h5>
                          <ul className="space-y-2 text-slate-600">
                            <li>• Centralized order management</li>
                            <li>• Automated workflow tracking</li>
                            <li>• Validation during upload</li>
                            <li>• Clear status visibility</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                            Pain Points
                          </h5>
                          <ul className="space-y-2 text-slate-600">
                            <li>• 9-step manual process</li>
                            <li>• Risk of wrong article code uploads</li>
                            <li>• Multiple stakeholder coordination</li>
                            <li>• No automated validation</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-white rounded-lg border border-purple-200">
                        <p className="text-slate-700 italic leading-relaxed">
                          "I need a system that automates the coordination between sales, finance, and procurement, with
                          built-in validation to prevent upload errors."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-100">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-slate-900 mb-3">The Key Insight</h4>
                <p className="text-slate-700 leading-relaxed">
                  The research revealed that this wasn't just about order management - it was about creating an
                  intelligent ecosystem that could predict, optimize, and automate the entire stamp lifecycle. Different
                  user types needed different levels of automation and control.
                </p>
                <p className="text-slate-700 mt-3 leading-relaxed">
                  Small enterprises wanted simple threshold-based alerts they could manage themselves, while large
                  enterprises like HDFC needed sophisticated consumption pattern analysis and automated procurement
                  workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="design" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Design Process</h2>
            <div className="w-12 h-px bg-slate-300 mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              I designed a comprehensive ecosystem with three core components: intelligent monitoring, consumption
              optimization, and streamlined procurement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-6">System Architecture</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h4 className="font-medium text-blue-600 mb-3">Wallet Alert Engine</h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Intelligent monitoring system with consumption pattern analysis, buffer factors, and predictive
                    alerts.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Bell className="w-4 h-4" />
                    <span>Automated threshold monitoring</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h4 className="font-medium text-green-600 mb-3">Consumption Optimization</h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Algorithm to minimize stamp duty loss through intelligent denomination selection and combination
                    logic.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <TrendingUp className="w-4 h-4" />
                    <span>Loss minimization algorithm</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h4 className="font-medium text-purple-600 mb-3">Ops Portal</h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Streamlined order management with automated workflows, validation, and multi-stakeholder tracking.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Users className="w-4 h-4" />
                    <span>Multi-stakeholder workflow</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h4 className="font-medium text-orange-600 mb-3">Client Dashboard</h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Self-service portal for wallet management, order creation, and consumption tracking.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Wallet className="w-4 h-4" />
                    <span>Self-service management</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <h4 className="font-medium text-slate-900 mb-4">System Integration</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                The four core components work together to create an intelligent ecosystem that automates the entire
                stamp lifecycle from monitoring to procurement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Alert Engine triggers procurement workflows</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Optimization reduces waste across all transactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Ops Portal manages multi-stakeholder coordination</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Client Dashboard provides self-service capabilities</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-lg font-semibold text-slate-900 mb-8">Key Interface Designs</h3>
            <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
              <div className="w-full h-[600px] flex items-center justify-center">
                <iframe
                  src="https://v0-new-project-clntr1owasm.vercel.app/"
                  className="w-full h-full border-0 rounded-lg"
                  title="Order Management Interface"
                  style={{
                    minHeight: "600px",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-100">
              <h4 className="font-medium text-slate-900 mb-3">Intelligent Automation</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                "The system learns from consumption patterns and automatically adjusts thresholds, reducing manual
                monitoring by 90% while improving accuracy."
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <h4 className="font-medium text-slate-900 mb-3">Loss Optimization</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                "The consumption algorithm reduced average stamp duty loss from 15-20% to under 3% by intelligently
                selecting denomination combinations."
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h4 className="font-medium text-slate-900 mb-3">Scalable Architecture</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                "Designed different automation levels for different enterprise sizes - from simple alerts for startups
                to full automation for banks."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Impact & Results</h2>
            <div className="w-12 h-px bg-slate-300 mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              The intelligent stamp wallet system transformed how enterprises manage their stamp inventory and
              consumption.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg border border-gray-100 text-center">
              <div className="text-3xl font-bold text-green-600 mb-3">87%</div>
              <h4 className="font-medium text-slate-900 mb-2">Reduction in Procurement Errors</h4>
              <p className="text-sm text-slate-600">Automated validation and workflow</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-3">75%</div>
              <h4 className="font-medium text-slate-900 mb-2">Reduction in Stamp Duty Loss</h4>
              <p className="text-sm text-slate-600">From 15-20% to under 5% average loss</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-3">90%</div>
              <h4 className="font-medium text-slate-900 mb-2">Reduction in Manual Monitoring</h4>
              <p className="text-sm text-slate-600">Automated alerts and pattern analysis</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h4 className="font-medium text-slate-900 mb-4">Measurable Business Impact</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Procurement TAT</span>
                  <span className="font-medium text-slate-900">9 days → 2 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Manual Coordination</span>
                  <span className="font-medium text-slate-900">60% → 10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Client Satisfaction</span>
                  <span className="font-medium text-slate-900">6.2 → 8.9/10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Monthly Savings</span>
                  <span className="font-medium text-slate-900">₹2-3 lakhs per client</span>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-blue-50 p-8 rounded-lg border border-blue-100 mb-8">
                <div className="flex items-start gap-4">
                  <Quote className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <blockquote className="text-slate-700 mb-4 leading-relaxed">
                      "The intelligent alert system has completely transformed our stamp management. We now get
                      predictive alerts 3 days before we actually run out, and the consumption optimization has saved us
                      lakhs in stamp duty loss."
                    </blockquote>
                    <cite className="text-sm text-slate-500">— Revenue Manager, HDFC Bank</cite>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-6">Business Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 leading-relaxed">
                    Enterprises can now predict and prevent stockouts with 95% accuracy
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 leading-relaxed">
                    Consumption optimization saves clients an average of ₹2-3 lakhs monthly
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 leading-relaxed">
                    Ops team productivity increased by 60% with automated workflows
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">Key Learnings</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-medium text-slate-900 mb-3">Predictive vs Reactive</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Moving from reactive "we're out of stamps" to predictive "we'll run out in 3 days" completely changed
                  the user experience and business outcomes.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-medium text-slate-900 mb-3">Algorithm Impact</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The consumption optimization algorithm had immediate, measurable financial impact - proving that good
                  UX can directly affect the bottom line.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-medium text-slate-900 mb-3">Ecosystem Thinking</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Success came from designing the entire ecosystem - not just interfaces, but intelligent algorithms,
                  automated workflows, and predictive systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">See More Projects</h2>
              <p className="text-slate-400">Check out my other UX case studies</p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                <a href="https://www.behance.net/arshiazz" className="flex items-center gap-2">
                  View Portfolio
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
