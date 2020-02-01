package fluentapi.tests;

import static org.junit.Assert.*;
import static org.hamcrest.Matchers.*;

import org.junit.Test;
import java.util.Set;

public class EmployeeServiceTest {

    private EmployeeService employeeService = new EmployeeService();

    @Test
    public void testCalculateHourlyRates() throws Exception {
        int execRate = employeeService.calculateHourlyRate(SalaryBands.EXEC);
        int specialistRate = employeeService.calculateHourlyRate(SalaryBands.SPECIALIST);
        int generalWorkerRate = employeeService.calculateHourlyRate(SalaryBands.GENERAL_WORKER);


        assertThat(execRate, is(greaterThan(specialistRate)));
        assertThat(generalWorkerRate, is(lessThan(specialistRate)));
        
    }

    @Test
    public void testGetSalaryBands() throws Exception {
        Set<SalaryBands> salaryBands = employeeService.getSalaryBands();

        assertThat(salaryBands, hasItems(SalaryBands.EXEC, SalaryBands.SPECIALIST, SalaryBands.GENERAL_WORKER));    
       
    }

    @Test
    public void testValidateEmployeeNumberWithValidEmployeeNumber() throws Exception {
        String employeeNumber = "ABC12345";

        boolean valid = employeeService.validateEmployeeNumber(employeeNumber);

        assertThat(valid, is(equalTo(true)));

    }

    @Test
    public void testValidateEmployeeNumberWithInvalidEmployeeNumber() throws Exception {
        String employeeNumber = "123ABCDE";

        boolean valid = employeeService.validateEmployeeNumber(employeeNumber);

        assertThat(valid, is(not(true)));
    }
}