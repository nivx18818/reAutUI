import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Copy, Download } from "lucide-react";
import { toast } from "react-toastify";

const script = `
  import unittest
  import time

  from selenium import webdriver
  from selenium.webdriver.common.keys import Keys
  from selenium.webdriver.common.by import By

  def evaluate_leaf_node_value(driver, parent_element_locator, expected_value):
      parent_element = driver.find_element(By.XPATH, parent_element_locator)
      leaf_nodes = get_leaf_node_webelements(driver, parent_element)

      for leaf_node in leaf_nodes:
          if evaluate_element_value(leaf_node, expected_value):
              return True

      return False


  def evaluate_element_value(element, expected_value):
  # Checking various attributes for the element
      try:
          value = element.get_attribute("value")
          if value == expected_value:
              return True
      except:
          pass

      try:
          inner_text = element.text
          if inner_text == expected_value:
              return True
      except:
          pass

      try:
          checked = element.get_attribute("checked")
          if checked == expected_value:
              return True
      except:
          pass

      try:
          placeholder = element.get_attribute("placeholder")
          if placeholder == expected_value:
              return True
      except:
          pass

      try:
          disabled = element.get_attribute("disabled")
          if disabled == expected_value:
              return True
      except:
          pass

      try:
          title = element.get_attribute("title")
          if title == expected_value:
              return True
      except:
          pass

      try:
          required = element.get_attribute("required")
          if required == expected_value:
              return True
      except:
          pass


      return False

  def get_leaf_node_webelements(driver, element):
      children = element.find_elements(By.XPATH, "child::*")
      leaf_nodes = []

      if children:
          for child in children:
              child_leaf_nodes = get_leaf_node_webelements(driver, child)  # Recursive call
              leaf_nodes.extend(child_leaf_nodes)
      else:
          leaf_nodes.append(element)

      return leaf_nodes

  def evaluate_valid_assertion(assertion_dnf_list):
      outer_status = 'FAIL'

      for assertion_inner_list in assertion_dnf_list:
          inner_status = 'PASS'

          for status in assertion_inner_list:
              if status == False:
                  inner_status = 'FAIL'
                  break

          if inner_status == 'PASS':
              outer_status = 'PASS'
              break

      if outer_status == 'FAIL':
          raise AssertionError("Assertion valid expression unexpectedly failed")

  def evaluate_invalid_assertion(assertion_dnf_list):
      outer_status = 'FAIL'

      for assertion_inner_list in assertion_dnf_list:
          inner_status = 'PASS'

          for status in assertion_inner_list:
              if status == False:
                  inner_status = 'FAIL'
                  break

          if inner_status == 'PASS':
              outer_status = 'PASS'
              break

      if outer_status == 'PASS':
          raise AssertionError("Assertion valid expression unexpectedly failed")

  class TestSuite(unittest.TestCase):
      def init_driver(self):
          options = webdriver.ChromeOptions()
          options.add_argument('--headless')
          options.add_argument('--no-sandbox')
          options.add_argument('--disable-dev-shm-usage')
          self.driver = webdriver.Chrome(options=options)
          self.driver.implicitly_wait(10)
      def clean_up(self):
          self.driver.quit()
          self.driver = None
      def test_valid_1(self):
          self.init_driver()
          self.driver.get("https://www.saucedemo.com/")
          self.driver.find_element(By.XPATH, "/html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input").send_keys("standard_user")
          self.driver.find_element(By.XPATH, "/html/body/div/div/div[2]/div[1]/div/div/form/div[2]/input").send_keys("secret_sauce")
          self.driver.find_element(By.XPATH, "/html/body/div/div/div[2]/div[1]/div/div/form/input").click()
          self.driver.find_element(By.XPATH, "/html/body/div/div/div/div[1]/div[1]/div[1]/div/div[1]/div/button").click()
          self.driver.find_element(By.XPATH, "/html/body/div/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/nav/a[2]").click()
          self.driver.find_element(By.XPATH, "/html/body/div[1]/div[3]/div/div/div[1]/div/div[1]/div[3]/div/div[2]/a").click()
          self.clean_up()
  if __name__ == '__main__':
      import pytest
      pytest.main(["--alluredir=/app/allure-results"])
`;

function Script() {
  const handleDownloadScript = () => {
    const blob = new Blob([script], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "script.py";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Script downloaded!");
  };

  const handleCopyScript = () => {
    navigator.clipboard
      .writeText(script)
      .then(() => toast.success("Script copied to clipboard!"));
  };

  return (
    <Section heading="Executable Python Script" className="p-5 pt-1">
      <div className="rounded-md bg-secondary">
        <ScrollArea className="h-[50vh]">
          <pre className="font-mono">{script}</pre>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="flex mt-4 space-x-2">
        <Button variant="outline" size="sm" onClick={handleDownloadScript}>
          <Download />
          <span>DOWNLOAD SCRIPT</span>
        </Button>
        <Button variant="outline" size="sm" onClick={handleCopyScript}>
          <Copy />
          <span>COPY SCRIPT</span>
        </Button>
      </div>
    </Section>
  );
}

export default Script;
