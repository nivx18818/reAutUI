import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { Checkbox } from "./components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { ScrollArea } from "./components/ui/scroll-area";
import { Triangle, Layers, Copy } from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("scenario");

  return (
    <div className="flex h-screen bg-white bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]">
      {/* Sidebar */}
      <div className="w-60 border-r bg-white">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <Triangle className="h-6 w-6 fill-black stroke-none" />
            <span className="font-bold text-lg ml-1">UTUI</span>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Triangle className="h-4 w-4 fill-black stroke-none" />
              <span className="font-medium">Scenarios</span>
            </div>
            <Layers className="h-4 w-4" />
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="p-2">
            {[1, 2].map((num) => (
              <div key={num} className="flex items-center space-x-2 p-2">
                <Checkbox id={`scenario-${num}`} />
                <label htmlFor={`scenario-${num}`} className="text-sm">
                  Scenario {num}
                </label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6">
          {activeTab === "scenario" && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">URL</label>
                <Input placeholder="Enter your web URL" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <Textarea
                  placeholder="Enter detailed description of the scenario"
                  className="min-h-[150px]"
                />
              </div>

              <Button className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white">
                <svg
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4V20M4 12H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                INPUT TEST DATA
              </Button>
            </div>
          )}

          {activeTab === "testData" && (
            <div className="max-w-2xl mx-auto border border-dashed border-gray-300 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Input placeholder="valid_username" className="w-48" />
                  <span className="text-sm">into username</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Input placeholder="valid_password" className="w-48" />
                  <span className="text-sm">into password</span>
                </div>
              </div>

              <div className="mt-12">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>valid_username</TableHead>
                      <TableHead>valid_password</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>standard_user</TableCell>
                      <TableCell>1</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {activeTab === "locators" && (
            <div className="max-w-2xl mx-auto border border-dashed border-gray-300 rounded-lg p-6">
              <h2 className="font-medium mb-4">XPath</h2>
              <Table>
                <TableBody>
                  {[
                    "/html/body/div/div/div[2]/div[1]/div/div/form/div[2]/input",
                    "/html/body/div[1]/div[3]/div/div/div[1]/div/div[1]/div[3]/div/div[2]/a",
                    "/html/body/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/nav/a[2]",
                    "/html/body/div/div/div[2]/div[1]/div/div/form/input",
                    "/html/body/div/div/div[1]/div[1]/div[1]/div/div[1]/div/button",
                    "/html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input",
                  ].map((xpath, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-green-600 font-mono text-sm">
                        {xpath}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {activeTab === "script" && (
            <div className="max-w-2xl mx-auto border border-dashed border-gray-300 rounded-lg p-6">
              <h2 className="font-medium mb-4">Python Script</h2>
              <div className="bg-gray-100 p-4 rounded-md">
                <pre className="text-sm font-mono whitespace-pre-wrap">
                  {`import webdriver
from webdriver.common.keys import Keys
from webdriver.common.by import By

def check_leaf_node_value(driver, parent_element_locator, expected_value):
    parent_element = driver.find_element(By.XPATH, parent_element_locator)
    leaf_nodes = get_leaf_node_webelements(driver, parent_element)

    for leaf_node in leaf_nodes:
        if compare_element_value(leaf_node, expected_value):
            return True

    return False

def compare_element_value(element, expected_value):
    # Implementation
`}
                </pre>
              </div>
              <div className="mt-4 flex space-x-2">
                <Button variant="outline" size="sm">
                  LOAD SCRIPT
                </Button>
                <Button variant="outline" size="sm">
                  <Copy className="h-4 w-4 mr-2" />
                  COPY SCRIPT
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Tabs */}
        <div className="border-t p-2 flex justify-center">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-auto"
          >
            <TabsList>
              <TabsTrigger value="scenario" className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                Scenario
              </TabsTrigger>
              <TabsTrigger value="testData" className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 8V16M8 12H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Test Data
              </TabsTrigger>
              <TabsTrigger value="locators" className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 9H15M9 12H15M9 15H13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Locators
              </TabsTrigger>
              <TabsTrigger value="script" className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    d="M8 9L4 12L8 15M16 9L20 12L16 15M14 4L10 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Script
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
