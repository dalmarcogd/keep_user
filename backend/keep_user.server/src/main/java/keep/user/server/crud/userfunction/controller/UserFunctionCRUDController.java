package keep.user.server.crud.userfunction.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import keep.user.server.core.spring.context.ManagerInstance;
import keep.user.server.crud.base.controller.AbstractCRUDController;
import keep.user.server.crud.base.service.AbstractCRUDService;
import keep.user.server.crud.userfunction.service.UserFunctionCRUDService;
import keep.user.server.crud.userfunction.service.UserFunctionQueryService;
import keep.user.server.model.userfunction.UserFunctionDTO;
import keep.user.server.model.userfunction.UserFunctionEntity;

/**
 * Implementação de {@link AbstractCRUDController} para {@link UserFunctionDTO}
 *
 * @author Guilherme Dalmarco (dalmarco.gd@gmail.com)
 */
@RestController
@RequestMapping("/userfunctions")
public class UserFunctionCRUDController extends AbstractCRUDController<UserFunctionDTO, UserFunctionEntity> {

    private UserFunctionCRUDService userFunctionCRUDService;
    private UserFunctionQueryService userFunctionQueryService;

    /**
     * Retorna o userFunctionCRUDService - {@link StateCRUDService}
     * @return {@link StateCRUDService}
     */
    public UserFunctionCRUDService getUserFunctionCRUDService() {
        if (userFunctionCRUDService == null) {
			userFunctionCRUDService = ManagerInstance.get(UserFunctionCRUDService.class);
		}
        return userFunctionCRUDService;
    }

    /**
	 * Retorna uma instancia de {@link StateQueryService}
	 * @return {@link StateQueryService}
	 */
	public UserFunctionQueryService getUserFunctionQueryService() {
		if (userFunctionQueryService == null) {
			userFunctionQueryService = ManagerInstance.get(UserFunctionQueryService.class);
		}
		return userFunctionQueryService;
	}

    /**
     * Serviço de persistencia de {@link UserFunctionEntity}
     * @return {@link AbstractCRUDService} of {@link UserFunctionEntity}
     */
    @Override
    protected AbstractCRUDService<UserFunctionEntity, UserFunctionDTO> getService() {
        return getUserFunctionCRUDService();
    }

    /**
     * Disponibiliza uma forma de leitura da entidade a partir do id.
     * @param id - {@link Long}
     * @return {@link ResponseEntity}
     */
	@GetMapping(params={"function"})
    public @ResponseBody ResponseEntity<?> read(@RequestParam(value = "function") String function){
        return ResponseEntity.ok(getService().convertAllToDTO(getUserFunctionQueryService().getFunctionsByName(function)));
    }
}