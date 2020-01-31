package fluentapi.tests;

import org.junit.Assert;
import org.junit.Test;
import java.util.Set;

public class EmployeeServiceTest {

    private EmployeeService employeeService = new EmployeeService();

    @Test
    public void testCalculateHourlyRates() throws Exception {
        int execRate = employeeService.calculateHourlyRate(SalaryBands.EXEC);
        int specialistRate = employeeService.calculateHourlyRate(SalaryBands.SPECIALIST);
        int generalWorkerRate = employeeService.calculateHourlyRate(SalaryBands.GENERAL_WORKER);

        Assert.assertTrue(execRate > specialistRate);
        Assert.assertTrue(generalWorkerRate < specialistRate);
    }

    @Test
    public void testGetSalaryBands() throws Exception {
        Set<SalaryBands> salaryBands = employeeService.getSalaryBands();

        Assert.assertTrue(salaryBands.contains(SalaryBands.EXEC));
        Assert.assertTrue(salaryBands.contains(SalaryBands.SPECIALIST));
        Assert.assertTrue(salaryBands.contains(SalaryBands.GENERAL_WORKER));
    }

    @Test
    public void testValidateEmployeeNumberWithValidEmployeeNumber() throws Exception {
        String employeeNumber = "ABC12345";

        boolean valid = employeeService.validateEmployeeNumber(employeeNumber);

        Assert.assertTrue(valid);
    }

    @Test
    public void testValidateEmployeeNumberWithInvalidEmployeeNumber() throws Exception {
        String employeeNumber = "123ABCDE";

        boolean valid = employeeService.validateEmployeeNumber(employeeNumber);

        Assert.assertFalse(valid);
    }
}