import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy, Download } from "lucide-react";

function Script() {
  return (
    <div className="max-w-2xl p-6 mx-auto border border-gray-300 border-dashed rounded-lg">
      <h2 className="mb-4 font-medium">Python Script</h2>
      <div className="p-4 bg-gray-100 rounded-md">
        <ScrollArea className="h-64">
          <pre className="font-mono text-sm whitespace-pre-wrap">
            {`
            import webdriver
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
        </ScrollArea>
      </div>
      <div className="flex mt-4 space-x-2">
        <Button variant="outline" size="sm">
          <Download />
          DOWNLOAD SCRIPT
        </Button>
        <Button variant="outline" size="sm">
          <Copy />
          COPY SCRIPT
        </Button>
      </div>
    </div>
  );
}

export default Script;
