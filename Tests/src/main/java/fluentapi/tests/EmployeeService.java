package fluentapi.tests;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class EmployeeService {

   public int calculateHourlyRate(SalaryBands salaryBand) {
        switch (salaryBand) {
            case EXEC:
                return 100;
            case SPECIALIST:
                return 60;
            case GENERAL_WORKER:
                return 25;
            default:
                return 0;
        }
    }

    public Set<SalaryBands> getSalaryBands() {
        return new HashSet<SalaryBands>(Arrays.asList(SalaryBands.values()));
    }

    public boolean validateEmployeeNumber(String employeeNumber) {
        return employeeNumber.matches("[A-Z]{3}[0-9]{5}");
    }

}
