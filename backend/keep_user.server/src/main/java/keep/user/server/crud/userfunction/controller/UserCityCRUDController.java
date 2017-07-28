package keep.user.server.crud.userfunction.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.WebRequest;

import keep.user.server.core.spring.context.ManagerInstance;
import keep.user.server.crud.base.controller.AbstractCRUDController;
import keep.user.server.crud.base.service.AbstractCRUDService;
import keep.user.server.crud.userfunction.service.UserCityCRUDService;
import keep.user.server.crud.userfunction.service.UserCityQueryService;
import keep.user.server.model.usercity.UserCityDTO;
import keep.user.server.model.usercity.UserCityEntity;

/**
 * Implementa��o de {@link AbstractCRUDController} para {@link UserCityDTO}
 *
 * @author Guilherme Dalmarco (dalmarco.gd@gmail.com)
 */
@RestController
@RequestMapping("/usercities")
public class UserCityCRUDController extends AbstractCRUDController<UserCityDTO, UserCityEntity> {

    private UserCityCRUDService userCRUDService;
    private UserCityQueryService userCityQueryService;

    /**
     * Retorna o userCRUDService - {@link StateCRUDService}
     * @return {@link StateCRUDService}
     */
    public UserCityCRUDService getUserCityCRUDService() {
        if (userCRUDService == null) {
			userCRUDService = ManagerInstance.get(UserCityCRUDService.class);
		}
        return userCRUDService;
    }

    /**
	 * Retorna uma instancia de {@link StateQueryService}
	 * @return {@link StateQueryService}
	 */
	public UserCityQueryService getTaskQueryService() {
		if (userCityQueryService == null) {
			userCityQueryService = ManagerInstance.get(UserCityQueryService.class);
		}
		return userCityQueryService;
	}

    /**
     * Servi�o de persistencia de {@link UserCityEntity}
     * @return {@link AbstractCRUDService} of {@link UserCityEntity}
     */
    @Override
    protected AbstractCRUDService<UserCityEntity, UserCityDTO> getService() {
        return getUserCityCRUDService();
    }

    /**
     * Disponibiliza uma forma de leitura da entidade a partir do id.
     * @param id - {@link Long}
     * @return {@link ResponseEntity}
     */
	@GetMapping(params={"username"})
    public @ResponseBody ResponseEntity<?> read(@RequestParam(value = "username") String username){
		RequestContextHolder.getRequestAttributes().setAttribute("username", username, WebRequest.SCOPE_REQUEST);
        return ResponseEntity.ok(getService().convertAllToDTO(getTaskQueryService().getTasksByUser(username)));
    }
}